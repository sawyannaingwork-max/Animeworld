export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full py-20">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>

        <div className="absolute inset-0 h-16 w-16 rounded-full blur-sm bg-gradient-to-r from-primary to-secondary opacity-75 animate-pulse"></div>
      </div>
    </div>
  );
}
