import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'MemoryTree — Two lives. One timeline.', description: 'A shared memory intelligence platform.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
