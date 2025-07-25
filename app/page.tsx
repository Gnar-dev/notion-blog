import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import TagSection from '@/app/_components/TagSection';
import ProfileSection from '@/app/_components/ProfileSection';
import Link from 'next/link';
import { PostCard } from '@/components/features/blog/PostCard';
import { getPublishedPosts, getTags } from '@/lib/notion';

interface HomeProps {
  searchParams: Promise<{ tag?: string }>;
}

// 30분마다 재생성
export const revalidate = 1800;

export default async function Home({ searchParams }: HomeProps) {
  const { tag } = await searchParams;
  const selectedTag = tag || '전체';

  try {
    const [posts, tags] = await Promise.all([getPublishedPosts(selectedTag), getTags()]);

    return (
      <div className="container py-8">
        <div className="grid grid-cols-[200px_1fr_220px] gap-6">
          {/* 좌측 사이드바 */}
          <aside>
            <TagSection tags={tags} selectedTag={selectedTag} />
          </aside>
          <div className="space-y-8">
            {/* 섹션 제목 */}
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">
                {selectedTag === '전체' ? '블로그 목록' : `${selectedTag} 관련 글`}
              </h2>
              <Select defaultValue="latest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="정렬 방식 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">최신순</SelectItem>
                  <SelectItem value="oldest">오래된순</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 블로그 카드 그리드 */}
            <div className="grid gap-4">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id}>
                  <PostCard post={post} />
                </Link>
              ))}
            </div>
          </div>
          {/* 우측 사이드바 */}
          <aside className="flex flex-col gap-6">
            <ProfileSection />
          </aside>
        </div>
      </div>
    );
  } catch (error) {
    console.error('데이터 로딩 중 오류 발생:', error);
    return (
      <div className="container py-8">
        <div className="space-y-4 text-center">
          <h1 className="text-2xl font-bold text-red-600">데이터를 불러올 수 없습니다</h1>
          <p className="text-muted-foreground">잠시 후 다시 시도해주세요.</p>
        </div>
      </div>
    );
  }
}
