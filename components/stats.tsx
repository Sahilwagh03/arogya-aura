const statsData = [
  {
    value: "99.9%",
    label: "Emergency Access Reliability",
  },
  {
    value: "2 Sec",
    label: "Average Scan Time",
  },
  {
    value: "24/7",
    label: "Life-Saving Availability",
  },
  {
    value: "10K+",
    label: "Protected Identities",
  },
];

const Stats = () => {
  return (
    <section className="w-full bg-[#f2f8f4] py-8 lg:py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-green-700">
                {stat.value}
              </h2>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;