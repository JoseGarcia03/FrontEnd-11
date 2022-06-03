export const getData = async() => {
    try {
        const resp = await fetch("http://localhost:4001/tareas");
        const data = await resp.json();
        return data;
    } catch (err) {
        console.log(err)
    }
}