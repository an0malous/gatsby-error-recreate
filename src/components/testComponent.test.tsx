import React from "react"

import TestComponent from "./testComponent"
import { render, screen } from "@testing-library/react"

describe("test", ()=> {
   it('Test test component', ()=> {
      render(<TestComponent name="Owen" />)
      const name = screen.getByText(/owen/i)
      expect(name).toBeInTheDocument()
   })
})