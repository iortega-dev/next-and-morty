import fetch from 'isomorphic-unfetch'

/* Aux async function to return query results in JSON format */
export default async function (...args) {
    const res = await fetch(...args)
    return res.json()
}