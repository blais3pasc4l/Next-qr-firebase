import { StyleForm } from "../styles/form";

export default function NotFound() {
    return (
      <StyleForm>
         <div className="max-w-2xl mx-8 sm:mx-auto py-20 flex flex-col items-center justify-center fit">
         <p variant="heading" className="text-center text-title-init">404</p>
        <p variant="heading" className="text-center text-title-init">Not Found</p>

      </div>
      
      </StyleForm>
     
    )
  }