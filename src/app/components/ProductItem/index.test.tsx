import { render, screen } from "@testing-library/react";
import ProductItem from "./index";

// 1. 현재 상품의 `title`과 `description`에 입력한 내용이 제대로 렌더링이 되는지 확인하기
test("상품 제목과 설명이 제대로 렌더링되는지 테스트", () => {
  render(
    <ProductItem title="테스트 상품" description="이것은 테스트 상품입니다." />,
  );

  const titleElement = screen.getByText("테스트 상품");
  const descriptionElement = screen.getByText("이것은 테스트 상품입니다.");
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
// 2. 증가 버튼과 감소 버튼, 초기 숫자인 1이 존재하는지 확인하기
test("증가 버튼과 감소 버튼, 초기 숫자가 존재하는지 테스트", () => {
  render(
    <ProductItem title="테스트 상품" description="이것은 테스트 상품입니다." />,
  );
  const descreaseButton = screen.getByRole("button", { name: "-" });
  const increaseButton = screen.getByRole("button", { name: "+" });
  const countElement = screen.getByText("1");
  expect(descreaseButton).toBeInTheDocument();
  expect(increaseButton).toBeInTheDocument();
  expect(countElement).toBeInTheDocument();
});
// 3. 구매하기 버튼이 존재하는지 확인하기
test("구매하기 버튼이 존재하는지 테스트", () => {
  render(
    <ProductItem title="테스트 상품" description="이것은 테스트 상품입니다." />,
  );
  const buyButton = screen.getByRole("button", { name: "구매하기" });
  expect(buyButton).toBeInTheDocument();
});
// 4. 상품이 품절 상태(`isSoldOut={true}`)일 때 “품절” 텍스트가 렌더링되는지 확인하기
test("상품이 품절 상태일 때 '품절' 텍스트가 렌더링되는지 테스트", () => {
  render(
    <ProductItem
      title="테스트 상품"
      description="이것은 테스트 상품입니다."
      isSoldOut={true}
    />,
  );
  const soldOutText = screen.getByText("품절");
  expect(soldOutText).toBeInTheDocument();
});
// 5. 상품이 품절 상태(`isSoldOut={true}`)일 때 버튼이 비활성화(`disabled`)되고, CSS 클래스명에 `opacity-50`과 `cursor-not-allowed`가 포함되는지 확인하기
test("상품이 품절 상태일 때 버튼이 비활성화되고, CSS 클래스명에 'opacity-50'과 'cursor-not-allowed'가 포함되는지 테스트", () => {
  render(
    <ProductItem
      title="테스트 상품"
      description="이것은 테스트 상품입니다."
      isSoldOut={true}
    />,
  );
  const buyButton = screen.getByRole("button", { name: "구매하기" });
  expect(buyButton).toBeDisabled();
  expect(buyButton).toHaveClass("opacity-50");
  expect(buyButton).toHaveClass("cursor-not-allowed");
});
