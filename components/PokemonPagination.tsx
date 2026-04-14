import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// npx shadcn@latest add @shadcn/pagination
// 페이징 처리 시 10개까지만 보일 수 있도록 초기값 설정
const PAGE_GROUP_SIZE = 10;

export function PokemonPagination
(
    {currentPage, totalPages}: {currentPage: number, totalPages: number}
) 
{
  const currentGroup = Math.floor( (currentPage-1) / PAGE_GROUP_SIZE );
  const startPage = currentGroup * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE-1, totalPages);
  
  const hasPrevGroup = startPage > 1;
  const hasNextGroup = endPage < totalPages;

  const prevGroupPage = startPage -1;
  const nextGroupPage = endPage +1;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            href={currentPage > 1 ? `/?page=${prevGroupPage}` : undefined} 
            className={!hasPrevGroup ? 'invisible' : ''}
            />
        </PaginationItem>

        {
            Array.from( {length: endPage - startPage + 1} ).map( (_, i) => {
                const pageNum = startPage + i;
                return (
                    <PaginationItem key={pageNum}>
                        <PaginationLink 
                            href={`/?page=${pageNum}`} 
                            isActive={currentPage === pageNum}
                        >
                            {pageNum}
                        </PaginationLink>
                    </PaginationItem>
                )
            })
        }
       
        <PaginationItem>
          <PaginationNext 
            href={currentPage < totalPages ? `/?page=${nextGroupPage}` : undefined} 
            className={!hasNextGroup ? 'invisible' : ''} 
            />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}