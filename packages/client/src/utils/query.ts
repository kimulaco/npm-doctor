export const getQueryOne = (
  queryValue: string | string[] | undefined
): string => {
  if (Array.isArray(queryValue)) {
    return queryValue[0]
  } else {
    return queryValue || ''
  }
}
