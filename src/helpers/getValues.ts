export const getRelationshipStatus = (status: string) => {
    if (status === 'prefer_not_say') {
        return 'Prefiero no decir'
    }
    if (status === 'married') {
        return 'Casado'
    }
    if (status === 'widow') {
        return 'Prefiero no decir'
    }
    if (status === 'divorced') {
        return 'Divorciado'
    }
}

export const getGender = (gender: string) => {
    if (gender === 'male') {
        return 'Masculino'
    }
    if (gender === 'female') {
        return 'Femenino'
    }
    return 'Prefiero no decirlo'
}

export const getScolarship = (degree: string) => {
    if (degree === 'male') {
        return 'Masculino'
    }
    if (degree === 'female') {
        return 'Femenino'
    }
    return 'Algún grado institucional'
}

export const getLanguage = (language: string | []) => {
    const value = JSON.parse(JSON.stringify(language ?? ''))
    
    if (value?.length > 1) {
        return value.map((element: string) => element).toString()
    }
    return value
}
export const getPets = (pets: string | []) => {
    const value = JSON.parse(JSON.stringify(pets ?? ''))
    
    if (value?.length > 1) {
        return value.map((element: string) => element).toString()
    }
    return value
}