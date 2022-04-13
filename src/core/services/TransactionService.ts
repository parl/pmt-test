import ApiService from "./ApiService"

export const getTransaction = (page, limit, dateFrom?, dateTo?) => {
    console.log({ page, limit })
    return ApiService.get(`/dev/accounts/transactions?page=${page}&limit=${limit}`)
}

export const deleteTransaction = (transactionId) => {
    return ApiService.delete(`/dev/accounts/delete/${transactionId}/transactions`)
}