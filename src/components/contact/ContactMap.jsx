import { useState } from "react";

const ContactMap = () => {
  const [isManufacturing, setIsManufacturing] = useState(false);

  const handleSelect = (e) => {
    setIsManufacturing(e.target.value === "manufacturing");
  };

  return (
    <section className="contact_swap_btns text-center">
      {/* Desktop/Tablet: buttons */}
      <div className="d-none d-md-inline-flex gap-4 togglebuttons">
        <button onClick={() => setIsManufacturing(false)} className="sr_btn">
          Corporate Office
        </button>
        <button onClick={() => setIsManufacturing(true)} className="sr_btn">
          Manufacturing Unit
        </button>
      </div>

      {/* Mobile: dropdown */}
      <div className="d-block d-md-none mob_togglebuttons">
        <label htmlFor="mapSelect" className="visually-hidden">Select location</label>
        <select
          id="mapSelect"
          className="form-select"
          value={isManufacturing ? "manufacturing" : "corporate"}
          onChange={handleSelect}
        >
          <option value="corporate">Corporate Office</option>
          <option value="manufacturing">Manufacturing Unit</option>
        </select>
      </div>

      {/* Map */}
      {isManufacturing ? (
        <div className="maps-area bg-gray overflow-hidden mt-3">
          <div className="google-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62152.85857902456!2d77.38041351457935!3d13.190518309032317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3bbfc3ab1aa5%3A0xc0cc351c70df4e89!2sSR%20SEATIING%20PRIVATE%20LIMIITED%20-%20MANUFACTURING%20UNIT!5e0!3m2!1sen!2sin!4v1754918725022!5m2!1sen!2sin" />
          </div>
        </div>
      ) : (
        <div className="maps-area bg-gray overflow-hidden mt-3">
          <div className="google-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.192614786376!2d77.59205567507735!3d13.023402887296726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17fb56690db1%3A0x8f5cc49ff46a0502!2sSR%20SEATIING%20PRIVATE%20LIMIITED%20-%20CORPORATE%20OFFICE!5e0!3m2!1sen!2sin!4v1754460584029!5m2!1sen!2sin" />
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactMap;
