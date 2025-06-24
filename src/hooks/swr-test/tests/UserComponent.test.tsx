import { render, screen } from "@testing-library/react";
import { SWRConfig } from "swr";
import { UserComponent } from "../components/UserComponent";
import { swrMultiMockMiddleware } from "../mocks/swrMockMiddleware";

describe("UserComponent", () => {
  test("ユーザー情報と既読数をモック表示できる", () => {
    const mockData = {
      "/api/user": { name: "山田太郎" },
      "/api/read-count": { count: 42 },
    };

    render(
      <SWRConfig value={{ use: [swrMultiMockMiddleware(mockData)] }}>
        <UserComponent />
      </SWRConfig>
    );

    expect(screen.getByText("名前: 山田太郎")).toBeInTheDocument();
    expect(screen.getByText("既読数: 42")).toBeInTheDocument();
  });
});
