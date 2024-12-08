Below are the individual endpoints for different operations.

## Endpoints

### 1. **Blogs**

- **Endpoint:** `/blogs`
- **Method:** `GET`
- **Description:** Fetches all the blogs.
- **Full URL:** [https://blog-agency-8v1o.vercel.app/api/blogs](https://blog-agency-8v1o.vercel.app/api/blogs)

### 2. **Team**

- **Endpoint:** `/team`
- **Method:** `GET`
- **Description:** Fetches all team members.
- **Full URL:** [https://blog-agency-8v1o.vercel.app/api/team](https://blog-agency-8v1o.vercel.app/api/team)

### 3. **Services**

- **Endpoint:** `/services`
- **Method:** `GET`
- **Description:** Fetches all available services.
- **Full URL:** [https://blog-agency-8v1o.vercel.app/api/services](https://blog-agency-8v1o.vercel.app/api/services)

### 4. **Admin**

- **Endpoint:** `/admin`
- **Method:** `GET`
- **Description:** Fetches admin-related information (if applicable).
- **Full URL:** [https://blog-agency-8v1o.vercel.app/api/admin](https://blog-agency-8v1o.vercel.app/api/admin)

### 5. **Admin Login**

- **Endpoint:** `/admin/login`
- **Method:** `POST`
- **Description:** Logs in an admin user to the platform.
- **Request Body:**
  - `username`: (string) Admin username.
  - `password`: (string) Admin password.
- **Full URL:** [https://blog-agency-8v1o.vercel.app/api/admin/login](https://blog-agency-8v1o.vercel.app/api/admin/login)

## Authentication

The `/admin/login` endpoint is the only one that requires authentication. After a successful login, the server will return a token that should be used for authentication in subsequent requests, if needed.

## Error Handling

If any error occurs, the API will return a status code and an error message.

## Conclusion

This API provides endpoints to interact with the core features of the Blog Agency platform, including blog posts, team members, services, and admin access.

For further information or assistance, you can access the live API at [https://blog-agency-8v1o.vercel.app/api/](https://blog-agency-8v1o.vercel.app/api/).
