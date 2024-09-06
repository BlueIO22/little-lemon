export default function CheckIfWeDeliveryToYouModule() {
  return (
    <section id="doWeDeliverToYou">
      <h3>Check if we deliver to you!</h3>
      <p>
        We might not be able to deliver to you, if your address is not within
        the scope of our delivery range. Sometimes we will make exceptions, so
        please feel free to contact us in such cases.
      </p>
      <form
        onSubmit={(event: any) => {
          event.preventDefault();
        }}
      >
        <label id="addressLabel">Address</label>
        <input
          placeholder="Please enter your address..."
          type="text"
          aria-labelledby="addressLabel"
          name="address"
        />
        <button className="primary-button">Check my address</button>
      </form>
    </section>
  );
}
