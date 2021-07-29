import React from "react"

import TestComponent from "./testComponent"
import { render, screen } from "@testing-library/react"
import { withQuerySnapshot } from "gatsby-plugin-testing"

describe("test", ()=> {
   it('Test test component', withQuerySnapshot(()=> {
      render(<TestComponent name="Owen" />)
      const name = screen.getByText(/owen/i)
      expect(name).toBeInTheDocument()
   }))
})