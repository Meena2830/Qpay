Qpay - Payment Settlement App


Qpay is a modern web application built with React (Vite) and Tailwind CSS that allows users to manage settlements seamlessly.  
It features a clean UI, responsive design, and smooth user experience for payment history, settlement requests, and account management.  

Setup Instructions: 


1. Clone the repo
   bash
   git clone https://github.com/Meena2830/Qpay.git
   cd Qpay
2.Install dependencies:
   npm install
3. Run Locally 
    npm run dev

 Notes on Architecture / Approach

- The project is built using Vite + React for fast development and optimized builds.  
- Tailwind CSS is used for styling, ensuring a responsive and consistent UI with minimal custom CSS.  
- The application is structured into reusable components for better maintainability.  
- API integration is handled using Axios with loading and error state handling.  
- State management is handled with React hooks (useState, useEffect) for simplicity.  
- The design approach was to keep the UI modular, so each screen/feature can be extended independently.  

 Time Spent

- Total time spent: ~19 hours
  - Project setup & environment configuration: ~ 10mins  
  - UI implementation with Tailwind CSS: ~12 hours  
  - API integration & logic handling: ~3 hours  
  - Testing, debugging & optimizations: ~4 hours  
  

 Known Limitations

- No global state management (like Redux/Context) is implemented — the app relies on local component state.  
- Error handling and edge cases (e.g., network failures, invalid inputs) can be improved further.  
- Responsive UI works well for most screens, but additional optimization is needed for smaller devices.  
- Unit and integration tests are not yet implemented.  


Recorded Video: https://drive.google.com/file/d/15v-nDhDBQRpN59jkyBSQSt_osTcQlvJK/view?usp=sharing

