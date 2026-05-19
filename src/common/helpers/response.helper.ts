// vou tentar o maximo ter somente uma fonte de verdade, entao vc será util
export function good_response<T>(message: string, data: T) {
    return {
        message: message,
        data: data
    }
}