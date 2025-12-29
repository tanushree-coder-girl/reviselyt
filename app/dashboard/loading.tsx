export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="flex items-center gap-3">
        
        <span className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse opacity-30" />
        <span className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse opacity-50 [animation-delay:0.15s]" />
        <span className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse opacity-100 [animation-delay:0.3s]" />
        <span className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse opacity-50 [animation-delay:0.45s]" />
        <span className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse opacity-30 [animation-delay:0.6s]" />

      </div>
    </div>
  );
}
