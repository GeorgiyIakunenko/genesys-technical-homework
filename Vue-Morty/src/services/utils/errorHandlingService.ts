export const handleError = async <T>(error: any): Promise<T> => {
  return {
    success: false,
    data: error
  } as T
}
