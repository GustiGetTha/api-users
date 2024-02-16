# API CRUD Users
Repository Belajar Membuat API dengan Fungsi CRUD

# Dokumentasi API - Users
CREATE
READ
UPDATE
DELETE

## Template Response

<br>

### Success:

<br>

```JS
// Response code 200, 201
{
    message: (if message exist),
    data: (if data exist),
} 
```

<br>

### Fail:

<br>

```JS
// Response code 400, 401, 403, 404
{
    message: errorMessage,
    data: null
}
```

<br>

### Database Error:

<br>

```JS
// Response code 500
{
    message: errorMessage,
    serverMessage: errorServerMessage
} 
```

<br>

---

### Create New User

> POST | localhost:4000/users

Request Body:
```TS
{
    nama: "Gusti",
    alamat: "Samarinda"
}
```

Response on Success: status 201
```TS
{
    message: "CREATE Users Success",
    data: {
        nama: "Gusti",
        alamat: "Samarinda"
    }
}
```

Response on Fail: status 400
```TS
{
    message: errorMessage,
    data: null
}
```

Response on Database Error: status 500
```TS
{
    message: errorMessage,
    serverMessage: errorServerMessage
}
```

<br>

### Get All Users

> GET | localhost:4000/users

Response on Success: status 200
```TS
{
    message: "GET All Users Success",
    data: {
        nama: "Gusti",
        alamat: "Samarinda"
    }
}
```

Response on Fail: status 400
```TS
{
    message: errorMessage,
    data: null
}
```

Response on Database Error: status 500
```TS
{
    message: errorMessage,
    serverMessage: errorServerMessage
}
```

<br>

### Edit Users By Id

> PATCH | localhost:4000/users/1

Response on Success: status 200
```TS
{
    message: "Update Users Success",
    data: {
        id: 1,
        nama: "Gusti",
        alamat: "Samarinda"
    }
}
```

Response on Fail: status 400
```TS
{
    message: errorMessage,
    data: null
}
```

Response on Database Error: status 500
```TS
{
    message: errorMessage,
    serverMessage: errorServerMessage
}
```

<br>

### Delete Users By Id

> DELETE | localhost:4000/users/1

Response on Success: status 200
```TS
{
    message: "Delete Users Success",
    data: {
        id: 1,
        data: null
    }
}
```

Response on Fail: status 400
```TS
{
    message: errorMessage,
    data: null
}
```

Response on Database Error: status 500
```TS
{
    message: errorMessage,
    serverMessage: errorServerMessage
}
```

<br>