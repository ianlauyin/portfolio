import Boardousell from "./Project/Boardousell";
import Bookswap from "./Project/Bookswap";
import Lingo from "./Project/Lingo";
import Bullet from "./Project/Bullet";

export default function Project() {
  return (
    <div class="p-2 space-y-10">
      <Boardousell />
      <Lingo />
      <Bookswap />
      <Bullet />
    </div>
  );
}
