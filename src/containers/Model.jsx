export default function Model({ isVisibal }) {
  if (isVisibal) {
    return (
      <div id="model">
        <div id="model-content">
          <h2>Model</h2>
        </div>
      </div>
    );
  } else {
    <></>;
  }
}
