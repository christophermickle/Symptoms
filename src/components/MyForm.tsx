import { createSignal, For, } from "solid-js";

type QuestionProps = {
  class: string;
  question: string;
  options: { value: number; label: string }[];
  onAnswer: (value: number) => void;
};
// I have no idea how to fix the issue on line 7. Please help. . . 

const Question = (props: QuestionProps) => {
  const [selectedOption, setSelectedOption] = createSignal<number>();
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = parseInt(target.value, 10);
    setSelectedOption(value);
    props.onAnswer(value);

  };

  return (
    <div class='my-4 mx-4 grid '>
      <p class='text-lg font-medium text-slate-400'>{props.question}</p>
      <div class='grid grid-cols-5 gap-2 mt-2'>
        <For each={props.options}>{(option) => (
          <label class='inline-flex items-center w-full my-2'>
            <input
              type='radio'
              class='form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out'
              value={option.value}
              checked={selectedOption() === option.value}
              onInput={handleChange}
            />
            <span class='ml-2 text-sm'>{option.label}</span>
          </label>
        )}</For>
      </div>
    </div>
  );
};

const MyForm = () => {
  const [formData, setFormData] = createSignal<{ [key: string]: number }>({});

  const handleAnswer = (question: string, value: number) => {
    setFormData((prev) => ({ ...prev, [question]: value }));
  };
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(formData());
  };
  const questions = [
    "How often do you forget to do something you do regularly, like paying a bill or taking medication?",
    "How often do you have difficulty concentrating on what people are saying to you, even when they are speaking to you directly?",
    "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
    "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
    "When you're in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them ",
    "How often do you put things off until the last minute?",
    "How often do you depend on others to keep your life in order and attend to details?",
    "How often do you have difficulty concentrating on what you're doing because you're thinking about other things?",
    "How often do you misplace or have difficulty finding things at home or at work?",
    "How often are you distracted by activity or noise around you?",
  ];

  return (
    <div class=' relative'>
      <form class='p-4 inset-0 mx-auto border border-solid border-slate-200 bg-slate-900 text-slate-200 rounded-lg grid items-center max-w-[800px] gap-2'>
        <For each={questions}>{(question, index) => (
          <Question
            class=""
            question={question}
            options={[
              { value: 0, label: "Never" },
              { value: 1, label: "Rarely" },
              { value: 2, label: "Sometimes" },
              { value: 3, label: "Often" },
              { value: 4, label: "Very often" },
            ]}
            onAnswer={(value) => handleAnswer(`question${index()}`, value)}
          />
          )}</For>
        <button
          class="border border-solid text-slate-400 bg- border-slate-200 w-[5rem] mx-auto"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
