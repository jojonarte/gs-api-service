import { Model, Pojo } from 'objection'
import * as R from 'ramda'
import { DBErrors } from 'objection-db-errors'

interface IJSONTransformRules {
  omit?: string[]
  transformations?: R.Evolver
}

export class BaseModel extends DBErrors(Model) {
  public readonly id!: number
  public createdAt!: Date
  public updatedAt!: Date
  public deletedAt?: Date

  protected $transformJSON: IJSONTransformRules = {
    omit: ['deletedAt'],
  }

  public $beforeUpdate(): void {
    this.updatedAt = new Date()
  }

  public toJSON(): Pojo {
    let json = super.toJSON()

    if (this.$transformJSON.omit) {
      json = R.omit(this.$transformJSON.omit, json)
    }

    if (this.$transformJSON.transformations) {
      json = R.evolve(this.$transformJSON.transformations, json)
    }

    return json
  }
}
