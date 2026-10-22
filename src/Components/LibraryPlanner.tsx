import { useState } from "react";

interface Borrowing {
  bookId: number;
  copies: number;
  edition: number;
}

export default function LibraryPlanner({ books }: LibraryPlannerProps) {
  const [borrowings, setBorrowings] = useState<Borrowing[]>(
    books.map((book) => ({
      bookId: book.bookId,
      copies: 0,
      edition: book.availableEditions[0],
    })),
  );

  function adjustCopies(bookId: number, delta: number) {
    setBorrowings((borrowing) =>
      borrowing.map((borrowing) =>
        borrowing.bookId === bookId
          ? { ...borrowing, copies: Math.max(0, borrowing.copies + delta) }
          : borrowing,
      ),
    );
  }

  function selectEdition(bookId: number, rawEdition: string) {
    setBorrowings((previous) =>
      previous.map((borrowing) =>
        borrowing.bookId === bookId
          ? { ...borrowing, edition: Number(rawEdition) }
          : borrowing,
      ),
    );
  }

  return (
    <div>
      <BorrowingList
        borrowings={borrowings}
        adjustCopies={adjustCopies}
        selectEdition={selectEdition}
      />
    </div>
  );
}
