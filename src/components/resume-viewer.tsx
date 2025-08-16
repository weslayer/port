'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function ResumeViewer() {
  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <div className="border rounded-lg overflow-hidden mb-6 w-full shadow-md">
        <iframe
          src="/WesleyResume2027.pdf"
          className="w-full"
          height="700"
          style={{ border: 'none' }}
          title="Wesley Wong Resume"
          aria-label="Resume PDF Viewer"
        />
      </div>
      
      <Button variant="default" asChild>
        <a href="/WesleyResume2027.pdf" download>
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </a>
      </Button>
    </div>
  );
}