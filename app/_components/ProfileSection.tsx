import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProfileSection() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/gymcoding',
    },

    {
      icon: Instagram,
      href: 'https://www.instagram.com/gymcoding',
    },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-muted rounded-full p-2">
              <div className="h-36 w-36 overflow-hidden rounded-full">
                <Image
                  src="/images/profile.jpg"
                  alt="프로필"
                  width={144}
                  height={144}
                  className="h-36 w-36 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold">천기범</h3>
            <p className="text-primary text-sm">FRONTEND Developer</p>
          </div>

          <div className="flex justify-center gap-2">
            {socialLinks.map((item, index) => (
              <Button key={index} variant="ghost" className="bg-primary/10" size="icon" asChild>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          <p className="bg-primary/10 rounded p-2 text-center text-sm">프런트엔드 개발자</p>
        </div>
      </CardContent>
    </Card>
  );
}
