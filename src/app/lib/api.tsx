export async function getProducts() {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
}