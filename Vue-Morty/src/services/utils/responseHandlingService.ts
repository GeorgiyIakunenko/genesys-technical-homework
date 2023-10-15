export const handleResponse = async <T>(response: any): Promise<T> => {
  if (response.status === 200) {
    return {
      success: true,
      data: response.data
    } as T
  }
  return {
    success: false,
    data: response.data
  } as T
}
