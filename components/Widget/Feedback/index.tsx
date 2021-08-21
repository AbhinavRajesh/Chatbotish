const Feedback = () => {
  return (
    <div className="chatbotish__feedbackForm">
      <label htmlFor="email">Email (Optional)</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email (Optional)"
      />
      <label htmlFor="Feedback">Feedback</label>
      <textarea
        name="feedback"
        id="feedback"
        rows={4}
        maxLength={200}
        placeholder="Enter your feedback"
      ></textarea>
      <button type="button">Submit</button>
    </div>
  );
};

export default Feedback;
