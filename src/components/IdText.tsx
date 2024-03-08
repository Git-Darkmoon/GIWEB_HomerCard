import type { ID_Text } from "~/types/ID_Text";

function IdText({ area, content }: ID_Text) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-semibold capitalize leading-5 text-slate-900">
        {content}
      </h2>
      <p className="text-lg font-semibold text-slate-600/70">{area}</p>
    </div>
  );
}

export default IdText;
