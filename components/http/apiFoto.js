"use client"


export const createPlace = async (place) => {
    const { data } = await fetch('/api/place', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: place })

    })
    return data
}

export const fetchPlaces = async () => {
    const res = await fetch('/api/place')
    const data = await res.json()
    return data
}

export const createYear = async (year) => {
    const { data } = await fetch('/api/year', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: year })
    })
    return data
}

export const fetchYears = async () => {
    const res = await fetch('/api/year')
    const data = await res.json()
    return data
}

export const createFoto = async (url, yearId, placeId) => {
    const { data } = await fetch('/api/foto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ img: url, date: yearId, name: placeId })
    })
    return data
}

export const fetchFotos = async (yearId = '680a529478344e17192f9c76', placeId = '680a52a078344e17192f9c78', page = 1, limit = 8) => {
    const res = await fetch(`/api/foto?yearId=${yearId}&placeId=${placeId}&page=${page}&limit=${limit}`, { method: 'GET' })
    const { fotos } = await res.json()
    return fotos
}

export const deleteFoto = async (id) => {
    const { data } = await fetch(`/api/foto?id=${id}`, { method: 'DELETE' })
    return data
}

