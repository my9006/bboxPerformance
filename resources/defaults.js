const baseHeader = (token) => {
    return {
        'accept': 'application/json',
        'country-code': 'ae',
        'content-type': 'application/json',
        'authorization': `bearer ${token}`
    }
}

export {baseHeader}