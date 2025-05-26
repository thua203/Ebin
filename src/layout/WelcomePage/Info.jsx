export default function Info() {
  return (
    <div className=" flex justify-center py-10  h-[400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 w-[90%] max-w-6xl text-primaryText">
        <div className="infoStyle-item">
            <div className="infoStyle-contain">
              <h3 className="infoStyle-title">AI–based Waste recognition</h3>
              <p className="infoStyle-content">
                bin-e uses an ai–based recognition system to identify waste, reaching a world leading accuracy of over 92%.
              </p>
            </div>
        </div>

        <div className="infoStyle-item">
            <div className="infoStyle-contain">
              <h3 className="infoStyle-title">Automatic Waste sorting</h3>
              <p className="infoStyle-content">
                the recognized waste will be then transported to the right fraction. everything happens 100% automatically.
              </p>
            </div>
        </div>

        <div className="infoStyle-item">
            <div className="infoStyle-contain">
              <h3 className="infoStyle-title">Fill level control and alerts</h3>
              <p className="infoStyle-content">
                fill level sensors check whether the bin needs to be emptied. you will be get an alert when the bins are full.
              </p>
            </div>
        </div>

        <div className="infoStyle-item">
            <div className="infoStyle-contain">
              <h3 className="infoStyle-title">Real–time data management</h3>
              <p className="infoStyle-content">
                all the data bin–e collects is transferred onto a cloud and processed in real-time.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
