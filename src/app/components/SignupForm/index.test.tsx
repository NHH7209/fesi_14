import { render, screen } from "@testing-library/react";
import SignupForm from "./index";

test("이메일, 비밀번호, 비밀번호 확인 입력 필드가 렌더링되어야 한다.", () => {
  render(<SignupForm />);

  const emailInput = screen.getByLabelText("이메일");
  const passwordInput = screen.getByLabelText("비밀번호");
  const passwordConfirmInput = screen.getByLabelText("비밀번호 확인");

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(passwordConfirmInput).toBeInTheDocument();
});

test("비밀번호, 비밀번호 확인 입력 필드의 Type이 password여야 한다.", () => {
  render(<SignupForm />);
  const passwordInput = screen.getByLabelText("비밀번호");
  const passwordConfirmInput = screen.getByLabelText("비밀번호 확인");
  expect(passwordInput).toHaveAttribute("type", "password");
  expect(passwordConfirmInput).toHaveAttribute("type", "password");
});

test("회원가입 버튼이 렌더링되는지 확인", () => {
  render(<SignupForm />);
  const signupButton = screen.getByRole("button", { name: "회원가입" });
  expect(signupButton).toBeInTheDocument();
});
