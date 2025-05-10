export const getData = async (query = "") => {
    const req = await fetch(`https://json-api.uz/api/project/fn37/todos?${query}`);
    if (req.status === 200) {
        const res = await req.json();
        return res.data
    } else {
        throw new Error("Xatolik mavjud")
    }
}

export const deleteData = async (id) => {
    const req = await fetch(`https://json-api.uz/api/project/fn37/todos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (req.status === 200) {
        const res = await req.text();
        return res
    } else {
        throw new Error("Xatolik mavjud")
    }
}