function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 text-center space-y-4 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <div>{icon}</div>
      <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
export default FeatureCard;