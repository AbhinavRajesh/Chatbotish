const FeatureRequest = () => {
  return (
    <form className="chatbotish__feedbackForm">
      <label htmlFor="feature">Feature</label>
      <input
        type="text"
        id="feature"
        name="feature"
        placeholder="What's the feature you would like to see?"
      />
      <label htmlFor="detail">Explain in detail (Optional)</label>
      <textarea
        required
        name="detail"
        id="detail"
        rows={4}
        maxLength={500}
        placeholder="Why do you want this feature to be implemented? What issue does this solve?"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeatureRequest;
