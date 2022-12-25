import db from "../../constant/db";

function GoogleMap() {
  return (
    <div className="">
      <div className="w-full mx-auto">
        {/* <div className="text-center text-gray-600 dark:text-gray-100 mb-16">
          <p className="text-4xl font-bold capitalize mb-3">
            We care for your pedicure safety
          </p>
            You will be safe with Contégo Pedicure Care · 100%  Disposible
          <p className="text-gray-600 dark:text-gray-100">
          </p>
          
          
        </div> */}
        <div className="flex flex-wrap justify-center">
       
        <iframe
            src={db.map}
            width="100%"
            height="400px"
            frameBorder="0"
            allowFullScreen
            title="salon map"
          ></iframe>
          
        </div>
      </div>
    </div>
  );
}

export default GoogleMap;
