import { TbBrandBooking } from "react-icons/tb";

function Cards() {
  return (
    <div className="cardsection">
      <section className="cardsec">
        <div className="card">
          <p className="iconpos">
            <TbBrandBooking size={30} />
          </p>
          <section className="bookings">
            <p>Bookings</p>
            <p>281</p>
          </section>
        </div>
        <p>+55%than last week</p>
      </section>
      <section>
        <section className="cardsec">
          <div className="card">
            <p className="iconpos">
              <TbBrandBooking size={30} />
            </p>
            <section className="bookings">
              <p>Bookings</p>
              <p>281</p>
            </section>
          </div>
          <p>+55%than last week</p>
        </section>
      </section>
      <section>
        <section className="cardsec">
          <div className="card">
            <p className="iconpos">
              <TbBrandBooking size={30} />
            </p>
            <section className="bookings">
              <p>Bookings</p>
              <p>281</p>
            </section>
          </div>
          <p>+55%than last week</p>
        </section>
      </section>
      <section>
        <section className="cardsec">
          <div className="card">
            <p className="iconpos">
              <TbBrandBooking size={30} />
            </p>
            <section className="bookings">
              <p>Bookings</p>
              <p>281</p>
            </section>
          </div>
          <p>+55%than last week</p>
        </section>
      </section>
    </div>
  );
}

export default Cards;
