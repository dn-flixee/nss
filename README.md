
# NSS Registration Portal

This project is a ReactJS web application created for the National Service Scheme (NSS) at your college. It serves as a platform for students to view resources, events, and register for NSS membership.

## Features

- **Home Page:** View all the upcoming events related to NSS.
- **Registration:** New students can register to become part of the NSS team. Upon registration, they will receive a PDF Provisional Certificate for NSS membership.
- **Admin Panel:** NSS administrators can access and manage user registration details.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nss-registration-portal.git
   ```

2. Navigate to the project directory:
   ```bash
   cd nss-registration-portal
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a Firebase project and obtain the necessary API keys.

5. Create an `.env` file in the project root and add the Firebase configuration:
   ```env
   REACT_APP_API_KEY=your_api_key
   REACT_APP_AUTH_DOMAIN=your_auth_domain
   REACT_APP_PROJECT_ID=your_project_id
   REACT_APP_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_APP_ID=your_app_id
   REACT_APP_MEASUREMENT_ID=your_measurement_id
   ```

6. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000/`.

## Firebase Configuration

This app uses Firebase to store data. Make sure to set up your Firebase project and replace the placeholder values in the `.env` file with your actual Firebase configuration.

## Contributing

Contributions to this project are welcome. If you have ideas for improvements or bug fixes, please feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as long as you include the appropriate attribution.

---

Thank you for using the NSS Registration Portal for your college's NSS team!
