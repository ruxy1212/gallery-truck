# STAGE 3 FRONTEND TASK

## PURE DnD Gallery

A responsive Drag and Drop Gallery application, with search functionality built with ReactJS. Users will have to sign in to view the gallery page using the credentials: Email: `ruxylessur@gmail.com` and Password: `Pass!World`.

## TASK

Develop a Drag-and-Drop Image gallery using React or Next Js.

### Objective

You will implement a fully functional and responsive image gallery that showcases a collection of images in a visually appealing way.
A user should be able to Login to the gallery page. Authenticated users should be able to use the Drag-and-Drop feature, they should be able to select and drag images, effortlessly rearranging them within the gallery.

### Requirements

1. Simple Authentication: 

- This means login with this email and password:
- UserName: user@example.com
- Password: 1Password

The authentication form fields should have proper validation setup, with proper error messages. You do not need to implement this on the backend yourself, you could use solutions like NextAuth, Auth0 or Clerk, firebase for Auth or add etc.

2. Image Display:

Display a grid layout that showcases a collection of images presented in a visually appealing manner with consistent spacing and sizing, add a tag to each image.

3. Loading state:

The page should have a loading state for when images are not ready for display, display a skeleton loader or a loading spinner when loading is true

4. Search Functionality:

You should have a search field that filters the image list based on the tags added to the images.

5. Drag-and-Drop:

Implement the ability for users to drag and drop images within the gallery.

6. User-friendly Feedback:

Incorporate smooth animations and visual cues that provide feedback during drag and drop interactions.

7. Responsive Design:

Ensure that the gallery is responsive and functions seamlessly on different devices, including mobile phones, tablets, and desktops.

8. Design Flexibility:

While adhering to the above requirements, you have the creative freedom to come up with a unique and appealing design.

### User Authentication

Users will require authentication to view the gallery page. This was implemented using Firebase.
The credentials to log in:
- Email: `ruxylessur@gmail.com`
- Password: `Pass!World`

### Error Handling and Notification

- Errors are handled appropriately. This application utilizes the `react-toastify` library to implement a visually-appealing notification style that displays error messages and other information.

## HOW TO RUN LOCALLY

- Create a directory for the project, open the directory in the terminal and clone the repository into the directory:
    > git clone https://github.com/ruxy1212/gallery-truck.git
- Navigate to the project folder and install the dependencies using `npm`:
    > cd gallery-truck && npm install

- Copy and create an environment file by running the following command:
    > cp .env.example .env

- Inside the `.env`, enter the Firebase authentication credentials

- Start the Frontend Vite server:
    > npm run dev

- The application can be accessed by the browser on `http:127.0.0.1:5713`

> Enjoy!

## HOSTING

This application is hosted on Netlify at [PURE Gallery](https://puregallery.netlify.app)