'use client' // Error boundaries must be Client Components

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  return (
    <html lang="es">
      <body>
        <h2>Algo salió mal</h2>
        <button onClick={() => unstable_retry()}>Intentar de nuevo</button>
      </body>
    </html>
  )
}
