# Doctor Listing Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository contains the codebase for a Doctor Listing Website. Built using **React**, **Node.js**, and **Tailwind CSS**, the application enables users to view and manage a list of doctors. The backend API, implemented with Express.js, provides endpoints for authentication, doctor management, and other features.

## Features

### Current Functionality

* **Authentication**
  * Secure admin login

* **Doctor Management**
  * View a list of all doctors
  * Add new doctors (with user verification)
  * Edit doctor details
  * Delete a doctor
  * View details of a single doctor

### Planned Enhancements

* Pagination for the doctor list
* Search functionality to find doctors by name or specialty
* Ability to upload and display images for doctors
* Performance optimizations for faster responses

## Tech Stack

* **Frontend**: React, styled with Tailwind CSS
* **Backend**: Node.js with Express.js

## Installation

### Prerequisites

Ensure you have the following installed:

* Node.js (>= 14.x)
* npm or yarn

### Steps

1. Clone the repository:

```bash
git clone https://github.com/adharshkc/doctor-list.git
cd doctor-list
```

2. Install dependencies:

For the backend:
```bash
cd backend
npm install
```

For the frontend:
```bash
cd frontend
npm install
```

3. Start the backend server:

```bash
cd backend
npm run dev
```

The server will run on `http://localhost:5173`

4. Start the frontend development server:

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:3000`

## API Documentation

### Base URL

```
http://localhost:5000/api/v1/
```

### Endpoints

#### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /login   | Allows admin users to log in |

#### Doctor Management

| Method | Endpoint     | Description |
|--------|-------------|-------------|
| GET    | /doctors    | Retrieves a list of all doctors |
| POST   | /doctor     | Adds a new doctor (requires user verification) |
| GET    | /doctor/:id | Fetches details of a specific doctor |
| PUT    | /doctor/:id | Updates the details of a doctor (requires user verification) |
| DELETE | /doctor/:id | Deletes a doctor (requires user verification) |


## Future Plans

1. Implement **pagination** for handling large datasets
2. Add **search functionality** to filter doctors by name, specialty, or location
3. Enable **image uploads** for doctor profiles
4. Further **optimize performance** for both backend and frontend

## Contributing

Contributions are welcome! If you'd like to add new features or fix bugs:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Adharsh K C](https://github.com/adharshkc/)