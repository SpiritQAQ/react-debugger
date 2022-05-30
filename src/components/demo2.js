export default function Demo2() {
  return (
    <div>
      {[...Array(10000).keys()].map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  )
}
