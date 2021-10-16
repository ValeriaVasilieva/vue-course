import { mount } from "@vue/test-utils";
import "regenerator-runtime/runtime";
import { it } from "@jest/globals";
import Calculator from "../components/Calculator";

describe("Calculator input tests", () => {
  it("Test operand1 input value", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[name=op1]");
    operand1Input.setValue("1");

    expect(wrapper.vm.op1).toBe(1);
  });
  it("Test operand2 input value", async () => {
    const wrapper = mount(Calculator);

    const operand2Input = wrapper.find("input[name=op2]");
    operand2Input.setValue("1");

    expect(wrapper.vm.op2).toBe(1);
  });
});

describe("Calculator operations tests", () => {
  it("Test sum operation", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[name=op1]");
    operand1Input.setValue("100");

    const operand2Input = wrapper.find("input[name=op2]");
    operand2Input.setValue("5");

    const sumOperationButton = wrapper.find('button[name="+"]');
    sumOperationButton.trigger("click");

    expect(wrapper.vm.result).toBe(105);
  });
  it("Test div operation", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[name=op1]");
    operand1Input.setValue("100");

    const operand2Input = wrapper.find("input[name=op2]");
    operand2Input.setValue("5");

    const divOperationButton = wrapper.find('button[name="/"]');
    divOperationButton.trigger("click");

    expect(wrapper.vm.result).toBe(20);
  });
  it("Test diff operation", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[name=op1]");
    operand1Input.setValue("100");

    const operand2Input = wrapper.find("input[name=op2]");
    operand2Input.setValue("5");

    const diffOperationButton = wrapper.find('button[name="-"]');
    diffOperationButton.trigger("click");

    expect(wrapper.vm.result).toBe(95);
  });
  it("Test multi operation", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[name=op1]");
    operand1Input.setValue("100");

    const operand2Input = wrapper.find("input[name=op2]");
    operand2Input.setValue("5");

    const multiOperationButton = wrapper.find('button[name="*"]');
    multiOperationButton.trigger("click");

    expect(wrapper.vm.result).toBe(500);
  });
  it("Test pow operation", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[name=op1]");
    operand1Input.setValue("2");

    const operand2Input = wrapper.find("input[name=op2]");
    operand2Input.setValue("3");

    const powOperationButton = wrapper.find('button[name="x^y"]');
    powOperationButton.trigger("click");

    expect(wrapper.vm.result).toBe(8);
  });
  it("Test IntDiv operation", async () => {
    const wrapper = mount(Calculator);

    const operand1Input = wrapper.find("input[name=op1]");
    operand1Input.setValue("10");

    const operand2Input = wrapper.find("input[name=op2]");
    operand2Input.setValue("3");

    const intDivOperationButton = wrapper.find('button[name="%"]');
    intDivOperationButton.trigger("click");

    expect(wrapper.vm.result).toBe(3);
  });
});

describe("Calculator keyboard test", () => {
  it("Input with radio1", async () => {
    const wrapper = mount(Calculator);
    wrapper.find("input[name=op1]");
    wrapper.find("input[name=checkbox]").setChecked();
    wrapper.find("input[data-name=radio1]").setChecked();
    wrapper.find('button[name="1"]').trigger("click");
    expect(wrapper.vm.op1).toBe(1);
  });
  it("Input with radio2", async () => {
    const wrapper = mount(Calculator);
    wrapper.find("input[name=op2]");
    wrapper.find("input[name=checkbox]").setChecked();
    wrapper.find("input[data-name=radio2]").setChecked();
    wrapper.find('button[name="2"]').trigger("click");
    expect(wrapper.vm.op2).toBe(2);
  });
  it("Keyboard op1 delete", async () => {
    const wrapper = mount(Calculator);
    wrapper.find("input[name=op1]").setValue("342");
    wrapper.find("input[name=checkbox]").setChecked();
    wrapper.find("input[data-name=radio1]").setChecked();
    wrapper.find('button[name="&larr;"]').trigger("click");
    expect(wrapper.vm.op1).toBe("34");
  });
  it("Keyboard op2 delete", async () => {
    const wrapper = mount(Calculator);
    wrapper.find("input[name=op2]").setValue("342");
    wrapper.find("input[name=checkbox]").setChecked();
    wrapper.find("input[data-name=radio2]").setChecked();
    wrapper.find('button[name="&larr;"]').trigger("click");
    expect(wrapper.vm.op2).toBe("34");
  });
});

describe("Calculator validate test", () => {
  it("Error validate false", async () => {
    const wrapper = mount(Calculator);
    wrapper.find("input[name=op1]").setValue("342");
    wrapper.find("input[name=op2]").setValue("0");
    wrapper.find('button[name="/"]').trigger("click");
    expect(wrapper.vm.validate()).toBe(false);
  });
  it("Error validate true", async () => {
    const wrapper = mount(Calculator);
    wrapper.find("input[name=op1]").setValue("342");
    wrapper.find("input[name=op2]").setValue("2");
    wrapper.find('button[name="/"]').trigger("click");
    expect(wrapper.vm.validate()).toBe(true);
  });
});
