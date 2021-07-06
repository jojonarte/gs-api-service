import * as R from 'ramda';

export const omitDeep = R.curry((obj: object, keys: string[]) => {
  if (!keys || keys.length === 0) {
    return obj
  }

  let newObj = R.clone(obj)

  keys.forEach(key => {
    const keyParts = key.split('.')
    newObj = R.dissocPath(keyParts, newObj)
  })

  return newObj
})

export const removeSensitiveAttributes = (inputData: object, excludes: string[]): object => {
  if (!inputData || !excludes || !excludes.length) {
    return inputData
  }

  const clonedData = R.clone(inputData)

  return omitDeep(clonedData, excludes);
}