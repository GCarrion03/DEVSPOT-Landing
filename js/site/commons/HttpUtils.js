export async function fetchFromPost(url,body) {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    });

    let result = await response.json();
    return (result);
}

export async function fetchFromPut(url,body) {
    let response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    });

    let result = await response.json();
    return (result);
}

export async function fetchFromDelete(url,body) {
    let response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    });

    let result = await response.json();
    return (result);
}