import api from "./api";

export function getAll() {
    return api.get('/meals')
}

export function getOne(mealId) {
    if (!mealId) {
        throw new Error('No ID provided!')
    }

    return api.get(`/meals/${mealId}`);
}

