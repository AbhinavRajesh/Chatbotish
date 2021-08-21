const ReportBugs = () => {
  return (
    <div className="chatbotish__feedbackForm">
      <label htmlFor="bug">Bug</label>
      <input type="text" id="bug" name="bug" placeholder="What's the bug?" />
      <label htmlFor="email">Email (Optional)</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="So we could contact you for more info (Optional)"
      />
      <label htmlFor="Feedback">Steps to reproduce the bug</label>
      <textarea
        required
        name="feedback"
        id="feedback"
        rows={4}
        maxLength={500}
        placeholder="Enter steps to reproduce the bug"
      ></textarea>
      <button type="button">Submit</button>
    </div>
  );
};

export default ReportBugs;
